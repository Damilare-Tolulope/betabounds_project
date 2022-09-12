import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";


const DraggableElement = ({ prefix, elements }) => (
  <div className="droppableStyle">
    <div className="columnHeader">{prefix}</div>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item, index) => (
            <ListItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default DraggableElement;
