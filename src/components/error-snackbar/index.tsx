import React, { useEffect, useState } from "react";
import { Snackbar } from "react-native-paper";

import { ErrorPayloadApi } from "../../services/types";

interface Props {
  error?: ErrorPayloadApi;
  label?: string;
}

export const ErrorSnackBar = ({ error, label = "Fechar" }: Props) => {
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    if (error) {
      onToggleSnackBar();
    }
  }, [error]);

  if (error && error.data.message instanceof Array) {
    return (
      <>
        {error.data.message.map((msg) => (
          <Snackbar
            key={msg}
            visible={visible}
            duration={2000}
            onDismiss={onDismissSnackBar}
            action={{
              label,
              onPress: onDismissSnackBar,
            }}
          >
            {msg}
          </Snackbar>
        ))}
      </>
    );
  }

  if (error && error.data) {
    return (
      <Snackbar
        visible={visible}
        duration={2000}
        onDismiss={onDismissSnackBar}
        action={{
          label,
          onPress: onDismissSnackBar,
        }}
      >
        {error.data.message}
      </Snackbar>
    );
  }
};
