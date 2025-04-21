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
import { Text } from "@/components/ui/text";
import { Box } from "../ui/box";
import { CloseIcon, Icon } from "../ui/icon";
import { Input, InputField } from "../ui/input";
import { Textarea, TextareaInput } from "../ui/textarea";
import {
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from "react-native";
import { GestureResponderEvent } from "react-native";

interface ContactProps {
    showDrawer: boolean;
    drawerToggle: (show: boolean) => void;
}

const Contact: React.FC<ContactProps> = ({ showDrawer, drawerToggle }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [honey, setHoney] = useState("");

    const autoResponseMessage = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #7c3c8e;">Thank you for your message!</h2>
    <p>
      Thank you for reaching out to <strong>relativity-codes (Ukweh C. Everest)</strong>!
      He will get back to you within the next <strong>48 hours</strong> from email:
      <a href="mailto:ukweheverest@gmail.com" style="color: #7c3c8e;">ukweheverest@gmail.com</a>.
    </p>
    <p>
      If no response is received, please send another message or call/text this number:
      <a href="tel:+2348109502584" style="color: #7c3c8e;">+2348109502584</a>.
    </p>
    <p style="margin-top: 20px;">Thank you again!</p>
  </div>
`;

    const handleSubmit = async (e: GestureResponderEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
        setIsSuccess(false);

        try {
            if (!name || !email || !message) {
                setIsError(true);
                return;
            }
            if (honey) {
                setIsError(true);
                return;
            }
            const response = await fetch("https://formsubmit.co/ajax/ukweheverest@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message, _captcha: false, _autoresponse: autoResponseMessage }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Form submission successful:", result);
                setIsSuccess(true);
                setName("");
                setEmail("");
                setMessage("");
            } else {
                const errorResult = await response.json();
                console.error("Form submission failed:", errorResult);
                setIsError(true);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (
        e: NativeSyntheticEvent<TextInputChangeEventData>,
        fieldName: string
    ) => {
        const { text } = e.nativeEvent;
        if (fieldName === "name") {
            setName(text);
        } else if (fieldName === "email") {
            setEmail(text);
        } else if (fieldName === "message") {
            setMessage(text);
        }
    };

    return (
        <>
            <Drawer
                isOpen={showDrawer}
                onClose={() => {
                    drawerToggle(false);
                }}
                size="lg"
                anchor="bottom"
            >
                <DrawerBackdrop />
                <DrawerContent className="bg-black px-4 text-white md:px-10">
                    <DrawerHeader className="flex flex-row items-center justify-between">
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
                    <DrawerBody className="rounded-md bg-gray-100">
                        <Box className="flex h-full w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-1">
                            <Box className="mt-4 flex w-full flex-grow flex-col items-start justify-start gap-4 p-4 md:w-1/2">
                                <Text className="text-black">You can fill out the form below:</Text>
                                <Box className="flex w-full flex-grow flex-col items-start justify-start gap-2">

                                    <Input
                                        variant="outline"
                                        size="md"
                                        isDisabled={isLoading}
                                        isInvalid={isError}
                                        isReadOnly={false}
                                        className="w-full rounded-md border border-black p-2"
                                    >
                                        <InputField
                                            placeholder="Enter Name here..."
                                            className="text-black"
                                            value={name}
                                            onChange={(e) => handleChange(e, "name")}
                                        />
                                    </Input>
                                    <Input
                                        variant="outline"
                                        size="md"
                                        isDisabled={isLoading}
                                        isInvalid={isError}
                                        isReadOnly={false}
                                        className="w-full rounded-md border border-black p-2"
                                    >
                                        <InputField
                                            placeholder="Enter Email here..."
                                            className="text-black"
                                            value={email}
                                            onChange={(e) => handleChange(e, "email")}
                                        />
                                    </Input>
                                    <Textarea
                                        size="md"
                                        isDisabled={isLoading}
                                        isReadOnly={false}
                                        isInvalid={isError}
                                        className="h-[100px] w-full rounded-md border border-black p-2 text-black"
                                    >
                                        <TextareaInput
                                            placeholder="Enter Message here..."
                                            className="text-black"
                                            value={message}
                                            onChange={(e) => handleChange(e, "message")}
                                        />
                                    </Textarea>
                                    <input type="text" name="_honey" style={{ display: "none" }} value={honey} onChange={(e) => setHoney(e.target.value)} />
                                    <Button
                                        onPress={handleSubmit}
                                        className="bg-[#7c3c8e]"
                                        isDisabled={isLoading}
                                    >
                                        Send
                                    </Button>
                                    {isSuccess && (
                                        <Text className="text-green-500">
                                            Message sent successfully!
                                        </Text>
                                    )}
                                    {isError && (
                                        <Text className="text-red-500">
                                            Failed to send message. Please try again.
                                        </Text>
                                    )}

                                </Box>
                            </Box>
                            <Box className="flex w-full flex-col items-center justify-center gap-4 p-4 md:w-1/2">
                                <Box className="flex w-full max-w-96 flex-col items-start justify-start gap-2">
                                    <Text className="text-black">
                                        Email:{" "}
                                        <a
                                            href="mailto:ukweheverest@gmail.com"
                                            className="text-[#7c3c8e]"
                                        >
                                            ukweheverest@gmail.com
                                        </a>
                                    </Text>
                                    <Text className="text-black">
                                        Phone:{" "}
                                        <a href="tel:+2348109502584" className="text-[#7c3c8e]">
                                            +2348109502584
                                        </a>
                                    </Text>
                                    <Text className="text-black">
                                        LinkedIn:{" "}
                                        <a
                                            href="https://www.linkedin.com/in/ukweheverest"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#7c3c8e]"
                                        >
                                            linkedin.com/in/ukweheverest
                                        </a>
                                    </Text>
                                    <Text className="text-black">
                                        GitHub:{" "}
                                        <a
                                            href="https://github.com/relativity-codes"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#7c3c8e]"
                                        >
                                            github.com/relativity-codes
                                        </a>
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer >
        </>
    );
};

export default Contact;