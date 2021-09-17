/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../infastrucure/authentication/authentication.service";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";

const SettingsItems = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const ViewProfile = styled(List.Item)`
  margin-top: ${(props) => props.theme.space[1]};
`;

const AvatarContainer = styled(View)`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182bd" />
        <ViewProfile>
          <Text variant="label">{user.email}</Text>
        </ViewProfile>
      </AvatarContainer>
      <List.Section>
        <SettingsItems
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItems
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => onLogOut()}
        />
      </List.Section>
    </SafeArea>
  );
};
