// SPDX-FileCopyrightText: con terra GmbH and contributors
// SPDX-License-Identifier: Apache-2.0
import { Container, Heading, Text } from "@open-pioneer/chakra-integration";
import { useIntl, useService } from "open-pioneer:react-hooks";
import { SomeComponents } from "./components/SomeComponents";
import { FetchData } from "./components/FetchData";
import { SearchBar } from "./components/SearchBar";

export function AppUI() {
    const intl = useIntl();
    const greeter = useService("sample-package.Greeter");
    return (
        <Container>
            <FetchData></FetchData>
            <SearchBar />

            <Heading as="h1" size="lg">
                {intl.formatMessage({ id: "heading" })}
            </Heading>
            <Text pt={5}>{intl.formatMessage({ id: "text" })}</Text>
            <SomeComponents />
        </Container>
    );
}
