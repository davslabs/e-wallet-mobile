import React from 'react';
import { Box, HStack, Text, VStack } from 'native-base';
import { Pressable, StyleSheet } from 'react-native';
import { EmptyMovement, MiniMovement } from '../../../components/shared';
import { Movement as MovementType } from '../../../types/Movement';
import { MaterialIcons } from '@expo/vector-icons';
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

const maxMovementsInHome = 3;
interface MovementsModuleProps {
  handlePress: () => void;
  movements: MovementType[];
}

const MovementsModule = ({ movements, handlePress }: MovementsModuleProps) => {
  return (
    <VStack space={5} marginTop={5} marginBottom={5}>
      <Box>
        <Text style={styles.title}>Mis movimientos</Text>
      </Box>
      {movements.length ? (
        <Pressable onPress={handlePress}>
          <HStack>
            <Box>
              {movements.slice(0, maxMovementsInHome).map((movement: MovementType, i) => {
                return (
                  <Box key={i}>
                    <MiniMovement
                      description={movement.descripcion}
                      amount={movement.monto}
                      date={movement.fechaHora}
                    />
                  </Box>
                );
              })}
            </Box>
          </HStack>
          <HStack justifyContent="space-between" mt={5}>
            <Text style={styles.textButton}>Ver mis movimientos</Text>
            <MaterialIcons name="chevron-right" size={25} />
          </HStack>
        </Pressable>
      ) : (
        <EmptyMovement />
      )}
    </VStack>
  );
};

export default MovementsModule;
