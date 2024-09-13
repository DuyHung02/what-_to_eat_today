import {Button, Text, View} from "react-native";
import {apiLogout} from "../../services/user/user.service";

const Authenticator = () => {
    const handleLogout = async () => {
        await apiLogout();
    };
    return (
        <View>
            <Text>Have auth</Text>
            <Button title="logout" onPress={handleLogout} />
        </View>
    )
};

export default Authenticator;