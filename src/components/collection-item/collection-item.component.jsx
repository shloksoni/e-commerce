import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({name,price,imageUrl,id}) =>(
<div className = "collection-item">
    <image style = {{ backgroundImage : `url(${imageUrl})`}} className='image'/>
    <div className="collection-footer">
        <span className = 'name'>{name}</span>
        <span className = 'price'>{price}</span>
    </div>
</div>
);

export default CollectionItem;