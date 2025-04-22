"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerBackdrop,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
} from "@/components/ui/drawer";
import { Heading } from "@/components/ui/heading";
import { Box } from "../ui/box";
import { CloseIcon, Icon } from "../ui/icon";

interface ContactProps {
    showDrawer: boolean;
    drawerToggle: (show: boolean) => void;
}


const colors = {
    primary: "#7c3c8e",
    textDark: "#000000",
    textLight: "#ffffff",
    backgroundLight: "#f3f4f6"
};

const contactInfo = {
    email: "ukweheverest@gmail.com",
    phone: "+2348109502584",
    linkedin: "https://www.linkedin.com/in/ukweheverest",
    github: "https://github.com/relativity-codes",
    name: "Ukweh C. Everest",
    brandName: "relativity-codes"
};

const formFields = [
    {
        name: "name",
        type: "text",
        placeholder: "Enter Name here...",
        required: true
    },
    {
        name: "email",
        type: "email",
        placeholder: "Enter Email here...",
        required: true
    },
    {
        name: "message",
        type: "textarea",
        placeholder: "Enter Message here...",
        required: true
    }
];

const autoResponseMessage = `
<div style="font-family: Arial, sans-serif; color: #333;">
  <h2 style="color: #7c3c8e;">Thank you for your message!</h2>
  <p>
    Thank you for reaching out to <strong>${contactInfo.brandName} (${contactInfo.name})</strong>!
    He will get back to you within the next <strong>48 hours</strong> from email:
    <a href="mailto:${contactInfo.email}" style="color: #7c3c8e;">${contactInfo.email}</a>.
  </p>
  <p>
    If no response is received, please send another message or call/text this number:
    <a href="tel:${contactInfo.phone}" style="color: #7c3c8e;">${contactInfo.phone}</a>.
  </p>
  <p style="margin-top: 20px;">Thank you again!</p>
</div>
`;

const formEndpoint = "https://formsubmit.co/ajax/ukweheverest@gmail.com";

const messages = {
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again.",
    validationError: "Please fill all required fields."
};

const Contact: React.FC<ContactProps> = ({ showDrawer, drawerToggle }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState({ loading: false, error: false, success: false });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setStatus({ loading: true, error: false, success: false });

        try {
            const response = await fetch(formEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    _captcha: false,
                    _autoresponse: autoResponseMessage
                }),
            });

            if (response.ok) {
                setStatus({ loading: false, error: false, success: true });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus({ loading: false, error: true, success: false });
            }
        } catch (error) {
            console.log(error)
            setStatus({ loading: false, error: true, success: false });
        }
    };

    return (
        <>
            <Drawer
                className="absolute bottom-0 left-0 h-screen w-screen"
                isOpen={showDrawer}
                onClose={() => {
                    drawerToggle(false);
                }}
                size="lg"
                anchor="bottom"
            >
                <DrawerBackdrop />
                <DrawerContent className="bg-black text-white">
                    <DrawerHeader className="flex flex-row items-center justify-between px-4 py-6 md:px-32">
                        <Box className="flex flex-row items-center justify-start gap-2">
                            <Heading size="2xl" className="text-gray-100">
                                Contact Form
                            </Heading>
                        </Box>
                        <Box>
                            <Button
                                onPress={() => {
                                    drawerToggle(false);
                                }}
                                className="flex-1 bg-transparent p-2"
                            >
                                <Icon color="#ffffff" as={CloseIcon} size="xl" />
                            </Button>
                        </Box>
                    </DrawerHeader>
                    <DrawerBody className="rounded-md bg-[rgba(0,0,0,0.5)] px-4 md:px-32">
                        <div className="flex w-full flex-col items-start justify-center gap-4 md:flex-grow md:flex-row md:items-center md:justify-between">
                            {/* Contact Form */}
                            <div className="flex w-full flex-grow flex-col rounded-lg bg-black text-white shadow-md md:w-1/2">
                                <h2 className="mb-4 text-xl font-semibold">Send a Message</h2>
                                <form className="flex w-full flex-col" onSubmit={handleSubmit}>
                                    {formFields.map((field) => (
                                        <div key={field.name} className="mb-4">
                                            {field.type === "textarea" ? (
                                                <textarea
                                                    placeholder={field.placeholder}
                                                    // value={formData[field.name]}
                                                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                                                    required={field.required}
                                                    className="w-full rounded border p-2 text-black"
                                                />
                                            ) : (
                                                <input
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    // value={formData[field.name]}
                                                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                                                    required={field.required}
                                                    className="w-full rounded border p-2 text-black"
                                                />
                                            )}
                                        </div>
                                    ))}

                                    <button
                                        type="submit"
                                        disabled={status.loading}
                                        className={`bg-[${colors.primary}] text-white px-4 py-2 rounded`}
                                    >
                                        {status.loading ? "Sending..." : "Send Message"}
                                    </button>

                                    {status.success && <p className="mt-2 text-green-500">{messages.success}</p>}
                                    {status.error && <p className="mt-2 text-red-500">{messages.error}</p>}
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="flex w-full flex-col items-end justify-center rounded-lg bg-black p-6 text-white shadow-md md:w-1/2">
                                {/* <h2 className="mb-4 w-full text-center text-xl font-semibold">Contact Information</h2> */}
                                <div className="space-y-4">
                                    <p>
                                        <strong className="text-[#7c3c8e]" >Email:</strong>{" "}
                                        <a href={`mailto:${contactInfo.email}`} className="text-white">
                                            {contactInfo.email}
                                        </a>
                                    </p>
                                    <p>
                                        <strong className="text-[#7c3c8e]">Phone:</strong>{" "}
                                        <a href={`tel:${contactInfo.phone}`} className="text-white">
                                            {contactInfo.phone}
                                        </a>
                                    </p>
                                    <p>
                                        <strong className="text-[#7c3c8e]">LinkedIn:</strong>{" "}
                                        <a href={contactInfo.linkedin} target="_blank" rel="noopener" className="text-white">
                                            {contactInfo.linkedin.split('//')[1]}
                                        </a>
                                    </p>
                                    <p>
                                        <strong className="text-[#7c3c8e]">GitHub:</strong>{" "}
                                        <a href={contactInfo.github} target="_blank" rel="noopener" className="text-white">
                                            {contactInfo.github.split('//')[1]}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer >
        </>
    );
};

export default Contact;