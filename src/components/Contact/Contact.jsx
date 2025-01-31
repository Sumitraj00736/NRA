import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <>
            <style>
                {`

          .contact-bg h3 {
            font-size: 1.3rem;
            font-weight: 400;
          }

          .contact-bg h2 {
            font-size: 3rem;
            text-transform: uppercase;
            padding: 0.4rem 0;
            letter-spacing: 4px;
          }

          .line div {
            margin: 0 0.2rem;
          }

          .line div:nth-child(1),
          .line div:nth-child(3) {
            height: 3px;
            width: 70px;
            background: #f7327a;
            border-radius: 5px;
          }

          .line {
            display: flex;
            align-items: center;
          }

          .line div:nth-child(2) {
            width: 10px;
            height: 10px;
            background: #f7327a;
            border-radius: 50%;
          }

          .text {
            font-weight: 300;
            opacity: 0.9;
          }

          .contact-bg .text {
            margin: 1.6rem 0;
          }

          .contact-body {
            max-width: 1320px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .contact-info {
            margin: 2rem 0;
            text-align: center;
            padding: 2rem 0;
          }

          .contact-info span {
            display: block;
          }

          .contact-info div {
            margin: 0.8rem 0;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .contact-info span i {
            font-size: 2rem;
            padding-bottom: 0.9rem;
            color: #f7327a;
          }

          .contact-info div span:nth-child(2) {
            font-weight: 500;
            font-size: 1.1rem;
          }

          .contact-info .text {
            padding-top: 0.4rem;
          }

          .contact-form {
            padding: 2rem 0;
            border-top: 1px solid #c7c7c7;
          }

          .contact-form form {
            padding-bottom: 1rem;
          }

          .form-control {
            width: 100%;
            border: 1.5px solid #c7c7c7;
            border-radius: 5px;
            padding: 0.7rem;
            margin: 0.6rem 0;
            font-family: 'Open Sans', sans-serif;
            font-size: 1rem;
            outline: 0;
          }

          .form-control:focus {
            box-shadow: 0 0 6px -3px rgba(48, 48, 48, 1);
          }

          .contact-form form div {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 0.6rem;
          }

          .send-btn {
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            text-transform: uppercase;
            color: #fff;
            // background: #f7327a;
            border: none;
            border-radius: 5px;
            padding: 0.7rem 1.5rem;
            cursor: pointer;
            transition: all 0.4s ease;
          }

          .send-btn:hover {
            opacity: 0.8;
          }

          .contact-form > div img {
            width: 85%;
          }

          .contact-form > div {
            margin: 0 auto;
            text-align: center;
          }

          .contact-footer {
            padding: 2rem 0;
            background: #000;
          }

          .contact-footer h3 {
            font-size: 1.3rem;
            color: #fff;
            margin-bottom: 1rem;
            text-align: center;
          }

          .social-links {
            display: flex;
            justify-content: center;
          }

          .social-links a {
            text-decoration: none;
            width: 40px;
            height: 40px;
            color: #fff;
            border: 2px solid #fff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0.4rem;
            transition: all 0.4s ease;
          }

          .social-links a:hover {
            color: #f7327a;
            border-color: #f7327a;
          }

          @media screen and (min-width: 768px) {
            .contact-bg .text {
              width: 70%;
              margin-left: auto;
              margin-right: auto;
            }

            .contact-info {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media screen and (min-width: 992px) {
            .contact-bg .text {
              width: 50%;
            }

            .contact-form {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              align-items: center;
            }
          }

          @media screen and (min-width: 1200px) {
            .contact-info {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .contact-info span i {
            font-size: 1.5rem;
          }
        `}
            </style>

            <section className="contact-section">
                <div className="contact-body">
                    <motion.div
                        className="contact-form"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <form>
                            <div>
                                <input type="text" className="form-control" placeholder="First Name" />
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div>
                                <input type="email" className="form-control" placeholder="E-mail" />
                                <input type="text" className="form-control" placeholder="Phone" />
                            </div>
                            <textarea rows="5" placeholder="Message" className="form-control"></textarea>
                            <input type="submit" className="send-btn bg-customBlue" value="send message" />
                        </form>
                        <div>
                            <img src="https://i.ibb.co/67RjnYpY/contact-vector.png" alt="" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="map"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.8681205272197!2d85.3211755!3d27.7172492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191d5b7c1f95%3A0xb5f828990e4f09e5!2sNepal%20Remitters%20Association%2C%20P88F%2BVHW%2C%20Near%20Krishna%20pauroti%2C%20काठमाडौँ%2044600!5e0!3m2!1sen!2snp!4v1675107630212!5m2!1sen!2snp"
                        width="100%"
                        height="450"
                        frameBorder="0"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />

                </motion.div>
            </section>
        </>
    );
};

export default Contact;
