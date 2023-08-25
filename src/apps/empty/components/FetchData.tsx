// SPDX-FileCopyrightText: con terra GmbH and contributors
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from "react";

export function FetchData() {
    const [data, setData] = useState();
    const [region, setRegion] = useState();

    useEffect(() => {
        fetch("https://demo.ldproxy.net/vineyards/collections/vineyards/items?f=json")
            .then((res) => res.json())
            .then((vine) => {
                setData(vine);
                console.log(
                    vine.features
                        .map((e: any) => ({ name: e.properties.name, geo: e.geometry }))
                        .filter((e: any) => e.name === "Woogberg")
                        .map((e: any) => e.geo)
                );
                console.log(vine);
                console.log(data);
                setRegion(vine.features.map((e: any) => e.id));
                console.log(region);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    //const region = data.features.map((e) => e.properties);
    return <></>;
}
