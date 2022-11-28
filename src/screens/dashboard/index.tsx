import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image } from "react-native";
import PngImages from "../../../assets/images/pngImages";
import { JOINED_TEXT, TITLE } from "../../constants";
import {
  ButtonAnimatedView,
  ButtonText,
  HeaderText,
  SafeAreaView,
  TextAnimatedView,
  TouchableView,
  Wrapper,
} from "./styled";

const Dashboard = () => {
  const [isJoin, setIsJoin] = useState<boolean>(false);
  const [isJoined, setIsJoined] = useState<boolean>(false);

  const fadeText = useRef(new Animated.Value(0)).current;
  const fadeButton = useRef(new Animated.Value(1)).current;

  /**
   * UseEffect to execute on change of dependency: fadeText & fadeButton
   */
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeText, {
        toValue: 1,
        duration: 4000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(fadeButton, {
        toValue: 0,
        duration: 4000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeText, fadeButton]);

  /**
   * Function to trigger on join button click
   */
  const triggerClick = () => {
    setIsJoin(true);
    setTimeout(() => {
      setIsJoined(true);
      setIsJoin(false);
    }, 2000);
  };

  return (
    <SafeAreaView>
      <Wrapper>
        <HeaderText>{TITLE}</HeaderText>
        {!isJoined && (
          <TouchableView onPress={() => triggerClick()}>
            {!isJoin && <Image source={PngImages.joinButton} />}
            {isJoin && (
              <ButtonAnimatedView style={{ opacity: fadeButton }}>
                <Image source={PngImages.checkButton} />
              </ButtonAnimatedView>
            )}
          </TouchableView>
        )}
        {isJoined && (
          <TextAnimatedView
            style={{
              opacity: fadeText,
            }}
          >
            <ButtonText>{JOINED_TEXT}</ButtonText>
          </TextAnimatedView>
        )}
      </Wrapper>
    </SafeAreaView>
  );
};

export default Dashboard;
