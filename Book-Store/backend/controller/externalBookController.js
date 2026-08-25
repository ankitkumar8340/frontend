
export const searchExternalBooks = async (req, res)=>{
    try{
        const {q} = req.query;
        if(!q){
            return res.status(400).json({message:'search query is required'});
        }

        const apiRes = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&limit=10`);
        const data = await apiRes.json();
        if (!data.docs || data.docs.length === 0) {
      return res.status(200).json([]);
    }

    const books = data.docs.map(doc => ({
      id: doc.key,
      title: doc.title,
      authors: doc.author_name || ['Unknown Author'],
      description: doc.first_sentence ? doc.first_sentence[0] : 'No description available',
     
      image: doc.cover_i 
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        : 'https://via.placeholder.com/128x193?text=No+Cover',
      previewLink: `https://openlibrary.org${doc.key}`
    }));

    res.json(books);
  } catch (error) {
    console.error('API Fetch Error:', error);
    res.status(500).json({ message: 'Error fetching external books', error: error.message });
  }
};








