import React from 'react'
import { useTranslation } from 'react-i18next';

const Form = ({props}) => {
    const { t } = useTranslation("global"); 
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
                    {t("contact.form.labelName")}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="ms-2 w-full outline-none bg-pwhite text-black"
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
                    {t("contact.form.labelEmail")}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="ms-2 w-full bg-pwhite outline-none text-black"
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
                    {t("contact.form.labelMessage")}
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        className="ms-2 w-full bg-pwhite outline-none text-black"
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
                        value={ t("contact.form.btnReset")}
                        className="bg-pgray rounded-full text-white font-bold w-20 h-7 md:h-9 md:w-28 text-sm"
                    />
                    <input
                        type="submit"
                        value={ t("contact.form.btn")}
                        className="bg-pgreen rounded-full text-white font-bold w-20 h-7 md:h-9 md:w-28 text-sm"
                    />
                </div>
            </form>
  )
}

export default Form