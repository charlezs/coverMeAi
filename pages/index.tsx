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
  HStack,
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
        <title>Promptomize</title>
        <meta name="description" content="Promptomize your prompts today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="100%" bg="black">
        <Center>
          <VStack
            w="5xl"
            h={{ base: "150vh", sm: "150vh", md: "100vh" }}
            gap="50px"
          >
            <Heading fontSize="50px" mt="10" color="#51da4c">
              It is time to super charge your prompt!
            </Heading>
            <HStack w="100%">
              <FormControl id="prompt" fontSize={"2xl"} onSubmit={handleSubmit}>
                <Box>
                  <Input
                    bg="transparent"
                    color="#51da4c"
                    borderRadius="0"
                    border="2px"
                    p="9px"
                    placeholder="What is the company name?"
                    size="lg"
                    variant="unstyled"
                    autoComplete="off"
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                  />
                  <Input
                    bg="transparent"
                    color="#51da4c"
                    borderRadius="0"
                    border="2px"
                    p="9px"
                    placeholder="Tell me about the company?"
                    size="lg"
                    variant="unstyled"
                    autoComplete="off"
                    onChange={(e) => setInformation(e.target.value)}
                    value={information}
                  />
                  <Input
                    bg="transparent"
                    color="#51da4c"
                    borderRadius="0"
                    border="2px"
                    p="9px"
                    placeholder="What are the job requirements?"
                    size="lg"
                    variant="unstyled"
                    autoComplete="off"
                    onChange={(e) => setRequirements(e.target.value)}
                    value={requirements}
                  />
                  <Input
                    bg="transparent"
                    color="#51da4c"
                    borderRadius="0"
                    border="2px"
                    p="9px"
                    placeholder="Tell me about yourself"
                    size="lg"
                    variant="unstyled"
                    autoComplete="off"
                    onChange={(e) => setAbout(e.target.value)}
                    value={about}
                  />
                </Box>
              </FormControl>
              <Link as={NextLink} href="/">
                <Button
                  bg="transparent"
                  color="#51da4c"
                  size="lg"
                  borderRadius="0"
                  border="2px"
                  p="20px"
                  onClick={handleSubmit}
                  isLoading={loading}
                  _hover={{
                    background: "#51da4c",
                    color: "black",
                  }}
                >
                  {" "}
                  Promptimize
                </Button>
              </Link>
            </HStack>
            <Box bg="transparent" borderRadius="lg">
              <Text fontSize="20px" color="#51da4c" whiteSpace="pre-wrap">
                {response}
              </Text>
            </Box>
          </VStack>
        </Center>
      </Container>
    </>
  );
}
