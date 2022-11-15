import React, { useState } from 'react';
import {
  Box,
  Center,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
  Button,
  Icon,
  Modal,
  Select,
  CheckIcon,
  ScrollView,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { MiniMovement, DateInput } from '../../components/shared';
import { Movement as MovementType } from '../../types/Movement';
import { RouteProp } from '@react-navigation/native';
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
  route: RouteProp<StackNavigatorParamsList, 'Movements'>;
}

const Movements = ({ route }: MovementsProps) => {
  const [movementsList, setMovementsList] = useState(route.params.movements);
  const [currentFilter, setCurrentFilter] = useState({ maxMovements: 10, fromDate: null, toDate: null });
  const [showModal, setShowModal] = useState(false);

  const setFromDate = (dateParam?: any) => {
    setCurrentFilter({ maxMovements: currentFilter.maxMovements, fromDate: dateParam, toDate: currentFilter.toDate });
  };

  const setToDate = (dateParam?: any) => {
    setCurrentFilter({ maxMovements: currentFilter.maxMovements, fromDate: currentFilter.fromDate, toDate: dateParam });
  };

  const applyFilter = () => {
    let filteredMovements = route.params.movements;
    if (
      currentFilter.toDate != null &&
      currentFilter.fromDate != null &&
      currentFilter.fromDate < currentFilter.toDate
    ) {
      filteredMovements = filteredMovements.filter((mov) => mov.fechaHora >= currentFilter.fromDate);
      filteredMovements = filteredMovements.filter((mov) => mov.fechaHora <= currentFilter.toDate);
    }
    filteredMovements.slice(0, currentFilter.maxMovements);
    setMovementsList(filteredMovements);
  };

  return (
    <VStack space={5} marginTop={5} marginBottom={5}>
      <Box>
        <Text style={styles.title}>Mis movimientos</Text>
        <Center>
          <Button onPress={() => setShowModal(true)}>Filtro</Button>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header>Filtrar Movimientos</Modal.Header>
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>Ver cantidad de movimientos</FormControl.Label>
                  <Select
                    selectedValue={currentFilter.maxMovements.toString()}
                    minWidth="200"
                    accessibilityLabel="Cantidad de movimientos"
                    placeholder="Cantidad a mostrar"
                    _selectedItem={{ bg: 'teal.600', endIcon: <CheckIcon size="5" /> }}
                    onValueChange={(itemValue) =>
                      setCurrentFilter({
                        maxMovements: parseInt(itemValue),
                        fromDate: currentFilter.fromDate,
                        toDate: currentFilter.toDate,
                      })
                    }
                  >
                    <Select.Item label="5 movimientos" value="5" />
                    <Select.Item label="10 movimientos" value="10" />
                    <Select.Item label="25 movimientos" value="25" />
                  </Select>
                </FormControl>
                <DateInput label="Desde" value={currentFilter.fromDate} onChangeHandler={setFromDate} />
                <DateInput label="Hasta" value={currentFilter.toDate} onChangeHandler={setToDate} />
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="ghost"
                    colorScheme="blueGray"
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onPress={() => {
                      setShowModal(false);
                      applyFilter();
                    }}
                  >
                    Aplicar
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Center>
      </Box>
      <ScrollView>
      <HStack>
        <Box>
          {movementsList.map((movement: MovementType, i) => {
            return (
              <Box key={i}>
                <MiniMovement description={movement.descripcion} amount={movement.monto} date={movement.fechaHora} />
              </Box>
            );
          })}
        </Box>
      </HStack>
      </ScrollView>
    </VStack>
  );
};

export default Movements;
