const ScheduleCard = ({ item, idx }) => {
  let importanceClass;
  if (item.importance === "상") {
    importanceClass = 'importance_high';
  } else if (item.importance === '중') {
    importanceClass = 'importance_middle';
  } else if (item.importance === '하') { 
    importanceClass = 'importance_low';
  }
  return (
    <div className="main_card_item">
      <div className="main_card_item_top">
        <span className="main_card_item_title">{item.title}</span>
        <span className={`main_card_item_importance ${importanceClass}`}>{item.importance}</span>
      </div>
      <div className="main_card_item_middle">
        <p>{item.content}</p>
      </div>
      <div className="main_card_item_bottom">
        {item.startDate.year === item.endDate.year && item.startDate.month === item.endDate.month && item.startDate.day === item.endDate.day
          ? <span>{item.startDate.year}. {item.startDate.month}. {item.startDate.day}. </span>
          : <span>{item.startDate.year}. {item.startDate.month}. {item.startDate.day}. ~ {item.endDate.year}. {item.endDate.month}. {item.endDate.day}.</span>}
      </div>
    </div >
  )
}
export default ScheduleCard;