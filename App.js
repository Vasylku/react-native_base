import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./UI/IconButton";

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="AllPlaces"
						component={AllPlaces}
						options={({ navigation }) => ({
							headerRight: ({ tintColor }) => (
								<IconButton
									icon="add"
									size={24}
									color={tintColor}
									onPress={() => navigation.navigate("AddPlace")}
								/>
							),
						})}
					/>
					<Stack.Screen name="AddPlace" component={AddPlace} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
