import React from "react";

export default function Form(){
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            message: "",
            submit: ""
        }
    )

    function handleChange(event){
        const {name, value, type, submit} = event.target
        setFormData(prevFormData => {
            return { 
                ...prevFormData,
                [name]: type === "submit" ? submit : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    return(
        <div className="main">
            <h1>Service Form</h1>
            <p>kindly fill the form nd we will get bact to you</p>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />

                <input
                    required
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />

                <teat
                    required
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />

                <label htmlFor="service">Select service you want</label>
                <br />
                <select 
                    id="service"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="service"
                    >
                        <option value="Web-development">Web Development</option>
                        <option value="App-development">App Development</option>
                        <option value="landing-page">Landing Page</option>
                        <option value="dynamic-web page">Dynamic Web Page</option>
                </select>

                <textarea
                    required
                    type="message"
                    placeholder="Message"
                    onChange={handleChange}
                    name="message"
                    value={formData.message}
                />
                <button 
                    type="submit"
                    onChange={handleChange}
                    name="submit"
                    value={formData.submit}
                >Submit</button>
            </form>
        </div>
    )
}