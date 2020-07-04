import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../App";
import { RouteProp } from "@react-navigation/native";

type SobreScreenRouteProp = RouteProp<RootStackParamList, "Sobre">;

type Props = {
  route: SobreScreenRouteProp;
};

const Sobre: React.FC<Props> = ({ route }) => {
  return (
    <View>
      <Text>Meu nome é: {route.params?.nome} </Text>
    </View>
  );
};

export default Sobre;
