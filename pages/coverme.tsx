import Head from "next/head";
import { useState } from "react";
import {
  VStack,
  Center,
  Text,
  Heading,
  Button,
  Input,
  FormControl,
  Box,
  Container,
  Stack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  const [response, setResponse] = useState("");
  const [information, setInformation] = useState("");
  const [requirements, setRequirements] = useState("");
  const [about, setAbout] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);
    setResponse("");

    const res = await fetch("/api/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt:
          "You are a skilled writer who knows how to write elegantly and are able to write convincing things." +
          "I am applying for a company named: " +
          company +
          "here is some information about the company: " +
          information +
          "here are the job requirements: " +
          requirements +
          "here is some information about me" +
          about +
          "can you write me a convincing cover letter on why I deserve this job?",
      }),
    }).then((res) => res.json());

    setResponse(res.data.text);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>CoverMe</title>
        <meta name="description" content="Create Cover Letters Fast!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="100%" bg="#89CFF0">
        <Center>
          <VStack
            w="5xl"
            // h={{ base: "150vh", sm: "150vh", md: "100vh" }}
            gap="50px"
          >
            <Heading fontSize="40px" mt="10" color="white">
              Hi, I am CoverAi lets build your cover letter!
            </Heading>
            <VStack w="100%">
              <FormControl id="prompt" fontSize={"2xl"} onSubmit={handleSubmit}>
                <Box>
                  <Stack direction="column">
                    <Text color="white">
                      What is the name of the company you are applying to?
                    </Text>
                    <Input
                      bg="transparent"
                      color="white"
                      borderRadius="30"
                      border="2px"
                      p="9px"
                      size="lg"
                      variant="unstyled"
                      autoComplete="off"
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                    />
                    <Text color="white">
                      Tell me about the company are applying too!
                    </Text>

                    <Input
                      bg="transparent"
                      color="white"
                      borderRadius="30"
                      border="2px"
                      p="9px"
                      size="lg"
                      variant="unstyled"
                      autoComplete="off"
                      onChange={(e) => setInformation(e.target.value)}
                      value={information}
                    />
                    <Text color="white">
                      What are the requirements for the role?
                    </Text>

                    <Input
                      bg="transparent"
                      color="white"
                      borderRadius="30"
                      border="2px"
                      p="9px"
                      size="lg"
                      variant="unstyled"
                      autoComplete="off"
                      onChange={(e) => setRequirements(e.target.value)}
                      value={requirements}
                    />
                    <Text color="white">
                      Tell me about your skills and experience
                    </Text>

                    <Input
                      bg="transparent"
                      color="white"
                      borderRadius="30"
                      border="2px"
                      p="9px"
                      size="lg"
                      variant="unstyled"
                      autoComplete="off"
                      onChange={(e) => setAbout(e.target.value)}
                      value={about}
                    />
                  </Stack>
                </Box>
              </FormControl>
              <Link as={NextLink} href="/" pt="10px">
                <Button
                  bg="transparent"
                  color="white"
                  size="lg"
                  borderRadius="30"
                  border="2px"
                  p="20px"
                  onClick={handleSubmit}
                  isLoading={loading}
                  _hover={{
                    background: "white",
                    color: "blue.100",
                  }}
                >
                  {" "}
                  Create My Cover Letter{" "}
                </Button>
              </Link>
            </VStack>
            <Box bg="transparent" borderRadius="lg" py="10">
              <Text fontSize="20px" color="white" whiteSpace="pre-wrap">
                {response}
              </Text>
            </Box>
          </VStack>
        </Center>
      </Container>
    </>
  );
}
