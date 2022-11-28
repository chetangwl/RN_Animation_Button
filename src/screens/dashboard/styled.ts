import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {FontFamily, rpx} from '../../utils';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  background-color: white;
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
  color: black;
  margin-top: ${rpx(40)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${rpx(14)}px;
  line-height: ${rpx(18)}px;
  font-family: ${FontFamily.montserratRegular};
  text-align: center;
  color: black;
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
