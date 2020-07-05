import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../App";
import { RouteProp } from "@react-navigation/native";

type PerfilScreenRouteProp = RouteProp<RootStackParamList, "Perfil">;

type Props = {
  route: PerfilScreenRouteProp;
};

const Perfil: React.FC<Props> = ({ route }) => {
  return (
    <View>
      <Text>Meu nome é: {route.params?.nome} </Text>
    </View>
  );
};

export default Perfil;
