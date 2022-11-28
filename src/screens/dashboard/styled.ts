import { Animated } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { FontFamily, rpx } from "../../utils";

const { backgroundColor, textPrimary, textSecondary } = colors;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  background-color: ${backgroundColor};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TouchableView = styled.TouchableOpacity`
  height: ${rpx(50)}px;
  margin-top: ${rpx(50)}px;
  align-self: center;
`;

export const HeaderText = styled.Text`
  font-size: ${rpx(14)}px;
  line-height: ${rpx(18)}px;
  font-family: ${FontFamily.montserratRegular};
  font-weight: 600;
  text-align: center;
  color: ${textPrimary};
  margin-top: ${rpx(40)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${rpx(14)}px;
  line-height: ${rpx(18)}px;
  font-family: ${FontFamily.montserratRegular};
  text-align: center;
  color: ${textSecondary};
  font-weight: 600;
`;

export const ButtonAnimatedView = styled(Animated.View)`
  height: ${rpx(50)}px;
  align-self: center;
`;

export const TextAnimatedView = styled(Animated.View)`
  height: ${rpx(50)}px;
  align-self: center;
  margin-top: ${rpx(60)}px;
`;
