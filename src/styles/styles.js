import { StyleSheet } from 'react-native';
import TeacherMessage from '../components/custom/TeacherMessage';

/**
 * 👉 Students: create all your styles here.
 * Start with: container, headerText, sectionTitle, itemRow, itemName, counter, input, button, etc.
 * Keep style names semantic.
 */
export const styles = StyleSheet.create({
  // e.g., container: { },
  // leave empty for now; using undefined styles is acceptable.

  container: {
    // flex: 1,
    padding: 16,
    backgroundColor: "#fff"
  },
  header: {
    paddingTop:20,
    alignItems: 'center',
    marginVertical: 12
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#222"
  },
  section: {
    marginVertical: 16,
    padding: 12
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: "#333"
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8
  },
  itemName: {
    flex: 1,
    fontSize: 16,
    color: "#000"
  },
  counter: {
    width: 40,
    textAlign: "center",
    fontSize: 16
  },
  inputbtn:{
    flexDirection:"row",
    gap:20,
    justifyContent:"center",
    alignItems:"center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width:"70%"
  },
    button: {
    paddingVertical: 8,
    paddingHorizontal:8,
    width:"20%",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#aaa",
    backgroundColor: "#aaa",
    elevation:5,
    alignItems:"center",
    marginBottom:5
  },
  buttoninc: {
    padding: 8,
    width:30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#aaa",
    backgroundColor: "#000",
    elevation:5
  },
  buttondec: {
    padding: 8,
    width:30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#aaa",
    backgroundColor: "#999898ff",
    alignItems:"center"

  },
  
  btntext:{
    color:"#fff",
    fontWeight:"semibold",

  },

  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  TeacherMessagehead:{
    fontSize:20,
    fontWeight:"800"
  },
  TeacherMessagetext:{
    fontSize:20,
    fontWeight:"600"
  }

});
