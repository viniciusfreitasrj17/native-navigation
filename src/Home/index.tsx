import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Ir para o Perfil"
        onPress={() => navigation.navigate("Perfil", { nome: "Marcos" })}
      />
    </View>
  );
};

export default Home;
