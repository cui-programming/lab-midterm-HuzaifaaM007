import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/styles';
import { Button, Text, TextInput } from '../ui';

/**
 * Custom/SearchAndAdd
 * Students implement:
 *  - a text box to add a new zikr (phrase only, count starts at 0)
 *  - a search box to filter existing azkaar by phrase
 *  - use only components from 'ui' for inputs and buttons
 *  - lifting state up if needed
 */
export default function SearchAndAdd({ onSearch, onAdd }) {

  const [searchText, setSearchText] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  const handleSearch = () => {
    onSearch(searchText.trim().toLowerCase());
  };

  const handleAdd = () => {
    const phrase = newPhrase.trim();
    if (phrase) {
      onAdd(phrase);
      setNewPhrase('');
    }
  };


  return (
    <View style={styles.section}>
      {/* TODO: Implement search and add UI here using ui/TextInput and ui/Button */}

      <Text style={styles.sectionTitle}>Search & Add Zikr</Text>
      <View style={styles.inputbtn}>
        <TextInput
          style={styles.input}
          placeholder="Search Zikr..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <Button style={styles.button} onPress={handleSearch}>Search</Button>
      </View>

      <View style={styles.inputbtn}>
        <TextInput
          style={styles.input}
          placeholder="Add New Zikr..."
          value={newPhrase}
          onChangeText={setNewPhrase}
        />
        <Button style={styles.button} onPress={handleAdd}>Add</Button>

      </View>
    </View>
  );
}
