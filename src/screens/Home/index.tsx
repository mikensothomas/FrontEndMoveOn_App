import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Container,
    StyledMap,
    BoxInputs,
    InputAtual,
    ButtonConfirmar,
    ButtonConfirmarText,
    NotificationsIcone,
    MenuAndNotifications,
    Menu,
} from "./style";
import { estados } from "../../hooks/state";
import { Pressable, StatusBar, View } from "react-native";
import { MenuContainer } from "../../components/menu";

export const Home = () => {
    const [location, setLocation] = useState<any>(null);
    const [address, setAddress] = useState<any>(null);
    const [destination, setDestination] = useState<any>(null);
    const [destinationAddress, setDestinationAddress] = useState<string>("");
    const [localAtualTexto, setLocalAtualTexto] = useState<string>("");
    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") return;

            const loc = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Highest,
            });

            setLocation(loc.coords);

            const addr = await Location.reverseGeocodeAsync({
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
            });

            setAddress(addr[0]);

            const estadoCompleto = addr[0].region || "";
            const uf: string | undefined = estados[estadoCompleto];

            setLocalAtualTexto(
                `${addr[0].street || "Rua desconhecida"}, ${addr[0].streetNumber || ""} - ${addr[0].district || ""
                } ${addr[0].city || ""} - ${uf || ""} ${addr[0].country || ""} ${addr[0].postalCode}`
            );

        })();
    }, []);

    const formatPlaceDetails = (details: any, data: any) => {
        const comps = details.address_components || [];

        const get = (type: string) =>
            comps.find((c: any) => c.types.includes(type))?.long_name || "";

        const street = get("route");
        const number = get("street_number");
        const neighborhood =
            get("sublocality") || get("neighborhood") || get("political");
        const city = get("locality") || get("administrative_area_level_2");
        const state = get("administrative_area_level_1");

        const finalText = `${street}${number ? `, ${number}` : ""}${neighborhood ? ` - ${neighborhood}` : ""
            }${city ? `, ${city}` : ""}${state ? ` - ${state}` : ""}`;

        return finalText || data.description;
    };

    if (!location || !address) {
        return (
            <Container style={{ justifyContent: "center", alignItems: "center" }}>
                <InputAtual editable={false} value="Obtendo sua localização..." />
            </Container>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <View style={{ height: 50, backgroundColor: "#1E90FF" }}>
                    <StatusBar backgroundColor="#1E90FF" barStyle="light-content" />
                    <MenuAndNotifications>
                        <Pressable
                            onPress={() => setOpenMenu(true)}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1
                            })}
                        >
                            <Menu name="menu-sharp" />
                        </Pressable>
                        <Pressable
                            onPress={() => { }}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1
                            })}
                        >
                            <NotificationsIcone name="notifications-outline" />
                        </Pressable>
                    </MenuAndNotifications>
                </View>
                {openMenu && (
                    <Pressable
                        onPress={() => setOpenMenu(false)}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: "70%",
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0,0,0,0.3)",
                            zIndex: 99,
                        }}
                    />
                )}

                {openMenu && (
                    <View
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "70%",
                            height: "100%",
                            backgroundColor: "#fff",
                            padding: 20,
                            zIndex: 20,
                            elevation: 10,
                        }}
                    >
                        <MenuContainer closeMenu={() => setOpenMenu(false)} />

                    </View>
                )}
                <BoxInputs>
                    <InputAtual
                        editable={true}
                        value={localAtualTexto}
                        onChangeText={(text: string) => setLocalAtualTexto(text)}
                    />

                    <GooglePlacesAutocomplete
                        placeholder="Para onde você quer ir?"
                        onPress={(data, details = null) => {
                            if (!details?.geometry?.location) return;

                            const { lat, lng } = details.geometry.location;

                            setDestination({
                                latitude: lat,
                                longitude: lng,
                            });

                            const formatted = formatPlaceDetails(details, data);
                            setDestinationAddress(formatted);
                        }}
                        fetchDetails={true}
                        query={{
                            key: "SUA_GOOGLE_API_KEY",
                            language: "pt-BR",
                        }}
                        styles={{
                            textInput: {
                                backgroundColor: "#fff",
                                height: 50,
                                borderRadius: 8,
                                paddingHorizontal: 10,
                                marginTop: 8,
                            },
                            listView: {
                                backgroundColor: "#fff",
                            },
                        }}
                    />
                </BoxInputs>

                <StyledMap
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        title="Local atual"
                    />

                    {destination && (
                        <Marker
                            coordinate={destination}
                            pinColor="green"
                            title="Destino"
                        />
                    )}
                </StyledMap>

                <ButtonConfirmar>
                    <ButtonConfirmarText>
                        Enviar ✔️ {destinationAddress}
                    </ButtonConfirmarText>
                </ButtonConfirmar>

            </Container>
        </SafeAreaView>
    );
};
