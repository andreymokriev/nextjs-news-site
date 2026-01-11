import Divider from "./divider";

export default function AddBar({
   newContent, 
   newHeader, 
   newImage, 
   newDate, 
   setContent, 
   setHeader, 
   setImage, 
   setDate

} : {
  newContent: string,
  newHeader: string,
  newImage: string,
  newDate: string,
  setContent: any,
  setImage: any,
  setHeader: any,
  setDate: any
}) {
    const handleSubmit = async (e: any) => {
      e.preventDefault();

      const response = await fetch('/api/addData', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              newHeader,
              newContent,
              newImage,
              newDate,
          }),
      });
  
      if (response.ok) {
          console.log("Data added successfully");
      } else {
          const errorData = await response.json();
          console.error("Failed to add data:", errorData.error);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="input-form">
        <input
        type='text'
        value={newHeader} placeholder='Заголовок'
        onChange={(e) => setHeader(e.target.value)} />
        <input
        type='text'
        value={newContent} placeholder='Содержимое'
        onChange={(e) => setContent(e.target.value)}/>
        <input
        type='text'
        value={newImage} placeholder='Изображение'
        onChange={(e) => setImage(e.target.value)}/>
        <input
        type='date'
        value={newDate} placeholder='Дата'
        onChange={(e) => setDate(e.target.value)}/>
        <button type="submit" className="submit">Добавить</button>
        <Divider />
      </form>
    );
  }