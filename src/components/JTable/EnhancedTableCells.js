import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

const useCellStyles = makeStyles((theme) => ({
  root: {},
  rowButtons: {
    padding: "0px 8px 0px 16px !important",
  },
}));

export default function EnhancedTableCells(props) {
  const {
    fields,
    isItemSelected,
    handleClick,
    handleEdit,
    handleDelete,
    editable,
    row,
    labelId,
  } = props;

  const classes = useCellStyles();

  return (
    <>
      {editable && (
        <TableCell
          padding="checkbox"
          onClick={(event) => handleClick(event, row.id)}
        >
          <Checkbox
            style={{ padding: "5px 0px" }}
            checked={isItemSelected}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </TableCell>
      )}
      {fields.map((field, idx) => {
        if (field.id === "id")
          return (
            <TableCell
              key={idx}
              component="th"
              id={labelId}
              scope="row"
              padding={field.disablePadding ? "none" : "default"}
              width={field.width}
            >
              {row.id}
            </TableCell>
          );

        return (
          <TableCell
            key={idx}
            align={field.align}
            padding={field.disablePadding ? "none" : "default"}
            width={field.width}
          >
            {row[field.id]}
          </TableCell>
        );
      })}
      {editable && (
        <TableCell
          padding={"default"}
          key={99}
          align="right"
          width={"10%"}
          className={classes.rowButtons}
        >
          <ButtonGroup
            size="small"
            color="primary"
            aria-label="contained primary small button group"
          >
            <Tooltip title="Editar">
              <IconButton
                aria-label="Editar"
                onClick={() => {
                  handleEdit(row);
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Borrar">
              <IconButton
                color="secondary"
                aria-label="Borrar"
                onClick={() => {
                  handleDelete(row);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        </TableCell>
      )}
    </>
  );
}
