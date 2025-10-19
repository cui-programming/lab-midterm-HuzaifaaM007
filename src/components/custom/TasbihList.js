import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';
import { Button, Text } from '../ui';
import SearchAndAdd from './SearchAndAdd';

export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);
  const [filteredItems, setFilteredItems] = useState(initialAzkaar);
  const [lastQuery, setLastQuery] = useState('');

  const applyFilter = (list, query) => {
    if (!query) return list;
    const lower = query.toLowerCase();
    return list.filter((item) => item.phrase.toLowerCase().includes(lower));
  };

  const increment = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setItems(updated);
    setFilteredItems(applyFilter(updated, lastQuery));
  };

  const decrement = (id) => {
    const updated = items.map((item) =>
      item.id === id && item.count > 0
        ? { ...item, count: item.count - 1 }
        : item
    );
    setItems(updated);
    setFilteredItems(applyFilter(updated, lastQuery));
  };

  const handleSearch = (query) => {
    setLastQuery(query);
    setFilteredItems(applyFilter(items, query));
  };

  const handleAdd = (phrase) => {
    const exists = items.some(
      (it) => it.phrase.toLowerCase() === phrase.toLowerCase()
    );
    if (!exists) {
      const newItem = { id: String(items.length + 1), phrase, count: 0 };
      const updated = [...items, newItem];
      setItems(updated);
      setFilteredItems(applyFilter(updated, lastQuery));
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
      <View style={styles.buttonGroup}>
        <Button style={styles.buttoninc} onPress={() => increment(item.id)}>
          <Text style={styles.btntext}> + </Text>
        </Button>
        <Button style={styles.buttondec} onPress={() => decrement(item.id)}>
          <Text style={styles.btntext}> - </Text>
        </Button>
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>

      <FlatList
        data={filteredItems}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
      <SearchAndAdd onSearch={handleSearch} onAdd={handleAdd} />
    </View>
  );
}
