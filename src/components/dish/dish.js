import React from "react";
import { Card, Button } from "antd";
import { useCounter } from "../../custom-hooks/use-counter";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <Card
      bordered
      actions={[
        `£${props.price}`,
        <>
          <span
            name="sasa"
            data-autoid={`COUNT_${props.id}`}
            style={{ margin: "0 12px" }}
          >
            {amount}
          </span>
          <Button.Group>
            <Button
              onClick={decrease}
              type="primary"
              shape="circle"
              icon="minus"
              data-autoid={`MINUS_DISH_BUTTON_${props.id}`}
            />
            <Button
              onClick={increase}
              type="primary"
              shape="circle"
              icon="plus"
              data-autoid={`PLUS_DISH_BUTTON_${props.id}`}
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta
        title={props.name}
        description={props.ingredients.join(", ")}
      />
    </Card>
  );
}

export default Dish;
