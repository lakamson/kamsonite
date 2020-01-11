
import React from "react"
import styled from "styled-components"
import { Box, Flex, Text } from "@primer/components"
import Octicon, { MarkGithub } from "@githubprimer/octicons-react"

export default function Nav() {
  return (
    <Box bg="gray.9" py={3} px={5}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flex="auto">
          <a
            style={{ color: "inherit" }}
            href="https://github.com/lakamson"
          >
            <Flex color="blue.2" alignItems="center">
              <Octicon
                icon={MarkGithub}
                ariaLabel="Primer home"
                size="medium"
              />
              <NoWrapText
                mx={3}
                fontSize="2"
                fontWeight="bold"
                lineHeight="condensed"
              >
                GitHub Profile
              </NoWrapText>
            </Flex>
          </a>
        </Flex>
        <Flex color="blue.2" alignItems="center">
          <a href="https://github.com/thomaswang/gatsby-starter-primer">
            <NoWrapText
              mx={3}
              fontSize="2"
              fontWeight="bold"
              lineHeight="condensed"
            >
              Gatsby Primer starter
            </NoWrapText>
          </a>
        </Flex>
      </Flex>
    </Box>
  )
}

const NoWrapText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

