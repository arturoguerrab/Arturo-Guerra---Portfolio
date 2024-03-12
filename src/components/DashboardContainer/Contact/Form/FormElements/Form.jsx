import React from 'react'

const Form = ({props}) => {
  return (
    <form
            ref={props.refForm}
            onSubmit={props.handleSubmit}
            className="flex flex-col w-full gap-5"
            >
                <label
                    htmlFor="name"
                    className="bg-pwhite text-pgray text-sm rounded-xl p-2 flex"
                >
                    Name:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="ms-2 w-full outline-none bg-pwhite"
                        required
                        onChange={(e) =>
                            props.setEmailInfo({ ...props.EmailInfo, name: e.target.value })
                        }
                    />
                </label>
                <label
                    htmlFor="email"
                    className="bg-pwhite text-pgray text-sm rounded-xl p-2 flex"
                >
                    Email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="ms-2 w-full bg-pwhite outline-none"
                        required
                        onChange={(e) =>
                            props.setEmailInfo({
                                ...props.EmailInfo,
                                email: e.target.value,
                            })
                        }
                    />
                </label>
                <label
                    htmlFor="message"
                    className="bg-pwhite text-pgray text-sm rounded-xl p-2 flex"
                >
                    Message:
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        className="ms-2 w-full bg-pwhite text-black outline-none"
                        cols="30"
                        rows="5"
                        required
                        onChange={(e) =>
                            props.setEmailInfo({
                                ...props.EmailInfo,
                                message: e.target.value,
                            })
                        }
                    />
                </label>
                <div className="flex justify-center gap-5 md:justify-end">
                    <input
                        type="reset"
                        value={"Reset"}
                        className="bg-pgray rounded-full text-white font-bold w-20 h-7 md:h-9 md:w-28 text-sm"
                    />
                    <input
                        type="submit"
                        value={"Submit"}
                        className="bg-pgreen rounded-full text-white font-bold w-20 h-7 md:h-9 md:w-28 text-sm"
                    />
                </div>
            </form>
  )
}

export default Form