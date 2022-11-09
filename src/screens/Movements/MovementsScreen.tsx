import React, { ReactElement } from 'react';
import { Box, HStack, Text, VStack } from 'native-base';
import { Pressable, StyleSheet } from 'react-native';
import { MiniMovement } from '../../components/shared';
import { Movement as MovementType } from '../../types/Movement';
import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp, StackNavigationState } from '@react-navigation/native';
import { StackNavigatorParamsList } from '../../types/StackNavigatorParamsList';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  textButton: {
    fontSize: 16,
    fontWeight: '300',
  },
});

interface MovementsProps {
  route : RouteProp<StackNavigatorParamsList, "Movements">;
  //handlePress: () => void;
  //movements: MovementType[];
}

const Movements = ({ route }: MovementsProps) => {
  return (
    <VStack space={5} marginTop={5} marginBottom={5}>
      <Box>
        <Text style={styles.title}>Mis movimientos</Text>
      </Box>
        <HStack>
          <Box>
            {route.params.movements?.map((movement: MovementType, i) => {
              return (
                <Box key={i}>
                  <MiniMovement description={movement.descripcion} amount={movement.monto} date={movement.fechaHora} />
                </Box>
              );
            })}
          </Box>
        </HStack>
    </VStack>
  );
};

export default Movements;