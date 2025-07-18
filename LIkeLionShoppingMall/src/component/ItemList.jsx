import { useState, useEffect } from 'react';
import { ItemCard } from './ItemCard';

export const ItemList = ({ ItemList=[], setShowModal }) => {
  const [selectedItem, setSelectedItem] = useState(null); // 어떤 아이템을 선택했는지

  return (
    <div className="px-10 pt-5">
      <div className="grid ph:grid-cols-2 dt:grid-cols-4 gap-4 justify-items-center">
        {ItemList?.map((item, index) => (
          <ItemCard key={item.id || index} item={item} setShowModal={setShowModal}/>
        ))}
      </div>
    </div>
  );
};

export default ItemList;