import { Text } from "@/styles/Text";
import { Container } from "@/styles/Global";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";
import { userData } from "@/utils/userData";
import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { ContactText, ContactCardContent, ContactsCards, ContactSection, ContactCard, ContactImage, ContactContent, } from "./style";

export const Contacts = () => {
    const baseUrlLinkedIn = `https://www.linkedin.com/in/${userData.linkedinUser}`;
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);
    const ref = useRef(null);

    return (
        <ContactSection id="contact">
            <Container>
                <ContactContent ref={ref}>
                    <motion.div style={{ scale }}>
                        <ContactText>
                            <Text type="heading2" color="grey4">
                                Let's set up a conversation and{" "}
                                <Text as="span" type="heading2" color="brand1">
                                    develop our creativity
                                </Text >
                                together!
                            </Text>
                            <Text type="body1" color="grey2"> Advertise your brand organically within Dribbble’s design inspiration feed.</Text>

                        </ContactText>
                    </motion.div>
                    <ContactsCards>
                        <ContactCard>
                            <ContactImage className="wpp">
                                <FaWhatsapp color="#fff" size={24} />
                            </ContactImage>
                            <ContactCardContent>
                                <Text type="heading4" color="grey4">
                                    My phone
                                </Text>
                                <Text color="grey2" type="body2">
                                    I'm available for a voice chat, let's about creativity
                                    together?
                                </Text>
                                <Text
                                    as="a"
                                    color="grey2"
                                    type="body2"
                                    target="_blank"
                                    href={`https://api.whatsapp.com/send?phone=+55+${userData.phoneNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                                >
                                    Call Now
                                </Text>
                            </ContactCardContent>
                        </ContactCard>

                        <ContactCard>
                            <ContactImage className="email">
                                <FaEnvelopeOpen color="#fff" size={24} />
                            </ContactImage>
                            <ContactCardContent>
                                <Text type="heading4" color="grey4">
                                    My email
                                </Text>
                                <Text color="grey2" type="body2">
                                    Send me an email reporting feedbacks, suggestions and ideas
                                </Text>

                                <Text
                                    as="a"
                                    color="grey2"
                                    type="body2"
                                    target="_blank"
                                    href={`mailto=${userData.emailUser}`}
                                    onClick={() =>
                                        (window.location.href = "mailto:fabianoamaral47@hotmail.com")
                                    }
                                >
                                    Send email now
                                </Text>
                            </ContactCardContent>
                        </ContactCard>
                        <ContactCard>
                            <ContactImage className="linkedin">
                                <FaLinkedin color="#fff" size={24} />
                            </ContactImage>
                            <ContactCardContent>
                                <Text type="heading4" color="grey4">
                                    My LinkedIn
                                </Text>
                                <Text color="grey2" type="body2">
                                    We can create more constant interactions as well as a sharing
                                    network
                                </Text>
                                <Text
                                    as="a"
                                    color="grey2"
                                    type="body2"
                                    target="_blank"
                                    href={baseUrlLinkedIn}
                                >
                                    Go to Telegram now
                                </Text>
                            </ContactCardContent>
                        </ContactCard>
                    </ContactsCards>
                </ContactContent>
            </Container>
        </ContactSection>
    );
};
