export async function fetchSuggestions(input, max) {
  try {
    const response = await fetch(`https://api.datamuse.com/sug?s=${input}&max=${max}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching suggestions:', error);
  }
};