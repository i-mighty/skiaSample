import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {
  BlurMask,
  Canvas,
  Circle,
  DiscretePathEffect,
  Group,
  Oval,
  Paint,
  RadialGradient,
  SweepGradient,
  usePaintRef,
  vec,
} from '@shopify/react-native-skia';

const ReactLogo = () => {
  const d = 50;
  const center = {
    x: Dimensions.get('window').width / 2,
    y: Dimensions.get('window').height / 2,
  };

  const rect = {
    x: center.x - d * 3,
    y: center.y - d * 1.25,
    width: d * 6,
    height: d * 2.5,
  };

  const c1 = '#1974d2',
    c2 = 'skyblue';

  const loopColors = [c1, c2, c1];

  const paint = usePaintRef();
  const radialGradient = usePaintRef();

  return (
    <Canvas style={{flex: 1}}>
      <Paint ref={radialGradient}>
        <RadialGradient
          c={vec(center.x + 25 / 2, center.y)}
          r={d / 2}
          colors={[c1, c2]}
        />
      </Paint>
      <Circle paint={radialGradient} c={center} r={d / 2} color="lightblue" />
      <Paint ref={paint} style="stroke" strokeWidth={18}>
        <SweepGradient c={center} colors={loopColors} />
        <BlurMask blur={10} style="inner" />
        <DiscretePathEffect deviation={3} length={10} />
      </Paint>
      <Group paint={paint}>
        <Oval rect={rect} />
        <Group transform={[{rotate: Math.PI / 3}, {scale: -1}]} origin={center}>
          <Oval rect={rect} />
        </Group>
        <Group
          transform={[{rotate: -Math.PI / 3}, {scale: -1}]}
          origin={center}>
          <Oval rect={rect} />
        </Group>
      </Group>
    </Canvas>

    // </View>

    // {/* </View> */}
    //   </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ReactLogo;
