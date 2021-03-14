import { parseISO, format } from "date-fns";
import React from "react";

type Props = {
  dateString: string;
};

const Date: React.FC<Props> = (props: Props) => {
  const date = parseISO(props.dateString);
  return (
    <time dateTime={props.dateString}>{format(date, "LLLL d, yyyy")}</time>
  );
};

export default Date;
