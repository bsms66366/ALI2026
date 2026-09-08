import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

interface NoteItem {
  id: number;
  name: string;
  urlCode: string;
  category_id: number;
}

interface ModuleNotesScreenProps {
  moduleNumber: string;
  categoryId: number;
}

export default function ModuleNotesScreen({ moduleNumber, categoryId }: ModuleNotesScreenProps) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<NoteItem[]>([]);
  const filteredData = data.filter(item => item?.category_id === categoryId);

  useEffect(() => {
    axios
      .get('https://placements.bsms.ac.uk/api/Notes')
      .then(({ data }) => {
        console.log('Module Notes API Response:', data);
        setData(data || []);
      })
      .catch((error) => {
        console.error('Module Notes API Error:', error);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MODULE {moduleNumber}</Text>
      {isLoading ? (
        <ActivityIndicator color="#bcba40" size="large" />
      ) : filteredData.length === 0 ? (
        <Text style={styles.emptyText}>No notes available for this module</Text>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => WebBrowser.openBrowserAsync(item.urlCode)}>
              <Text style={styles.noteItem}>{item.name}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#000',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  emptyText: {
    color: '#9D9D9C',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  noteItem: {
    flex: 1,
    color: '#bcba40',
    backgroundColor: '#000',
    borderColor: '#bcba40',
    borderStyle: 'dotted',
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    marginVertical: 5,
    marginHorizontal: 8,
    marginBottom: 5,
  },
});
