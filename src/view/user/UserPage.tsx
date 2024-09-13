import {Text, View} from "react-native";
import {useEffect, useState} from "react";
import {globalStyles} from "../../constant";

const UserPage = () => {
    const [userStore, setUserStore] = useState();

    useEffect(() => {
        (async () => {
        })()
    }, []);

    if (userStore) {
        console.log(userStore)
    }

    return (
        <View style={globalStyles.container}>
            <Text>User Page</Text>
        </View>
    )
};

export default UserPage;