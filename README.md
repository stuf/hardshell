# hardshell

Common utilities and eyecandy things for CLI applications.

## Contents

  - [Helpers](#helpers)
    - [`lineOK :: String -> String`](#helper-lineok)
    - [`lineFail :: String -> String`](#helper-linefail)
  - [Classes](#classes)
    - [`StatusLine :: String -> String -> (String -> String) -> StatusLine`](#class-statusline)
      - [`getLabel :: StatusLine s => s ~> String`](#class-statusline-getlabel)
      - [`getLine :: StatusLine s => s ~> String`](#class-statusline-getline)
      - [`toString :: StatusLine s => s ~> String`](#class-statusline-tostring)

## Helpers

### <a name="helper-lineok"></a>`lineOK :: String -> String`

### <a name="helper-linefail"></a>`lineFail :: String -> String`

## Classes

### <a name="class-statusline"></a>`StatusLine :: String -> String -> (String -> String) -> StatusLine`

#### <a name="method-statusline-getlabel"></a>`getLabel :: StatusLine s => s ~> String`

#### <a name="class-statusline-getline"></a>`getLine :: StatusLine s => s ~> String`

#### <a name="class-statusline-tostring"></a>`toString :: StatusLine s => s ~> String`
