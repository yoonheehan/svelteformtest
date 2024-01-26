import { fail } from "@sveltejs/kit"
import { object, string, number, date, InferType } from 'yup'; 

export const actions = {
  default: async({request}) => {
    const formData = await request.formData();

    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    const contactFormSchema = object({
      name: string().min(2, "too short").required(),
      email: string().required().email(),
      message: string().required()
    });

    
    try {
      const result = await contactFormSchema.validate({name, email, message}, {abortEarly: false});

      const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLScV-uIS2fcQwTmEWxVYmAMzSS1nyGH-LXEavwcqhAMoYKFDyg/formResponse?usp=pp_url&entry.1749804097=${name}&entry.1721428203=${email}&entry.778021390=${message}&submit=Submit`


      const res = await fetch(prefilledLink)
      if(res.status !== 200) {
        
      }

      return {
        success: true,
        status: "Form is submitted"
      }
    } catch (error) {
      const errors = error.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message}
      }, {})

      return {
        errors,
        name,
        email,
        message
      }
    }
    


    // // do something with the data
    // if(!name) {
    //   return fail(400, { error: "name is missing", email, message})
    // }
    // if(!email) {
    //   return fail(400, { error: "email is missing", name, message})
    // }
    // if(!message) {
    //   return fail(400, { error: "message is missing", name, email})
    // }
    
  }
}