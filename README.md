
<p align="center">
  <img src="https://raw.githubusercontent.com/furcan/SlotMachine/main/public/slot-machine-cover.png" width="1920" height="auto" alt="Slot Machine">
</p>
<br />

# Slot Machine
A Slot Machine simulation that has been developed by using React(TypeScript/SCSS). Redux has been used for state management.

App: https://furcan.github.io/SlotMachine/

---

| Winning Combinations                            | Payouts |
| ----------------------------------------------- | ------- |
| 3 CHERRY symbols on top line                    | x2000   |
| 3 CHERRY symbols on center line                 | x1000   |
| 3 CHERRY symbols on bottom line                 | x4000   |
| 3 SEVEN symbols on any line                     | x150    |
| Any combination of CHERRY and SEVEN on any line | x75     |
| 3 3xBAR symbols on any line                     | x50     |
| 3 2xBAR symbols on any line                     | x20     |
| 3 BAR symbols on any line                       | x10     |
| Combination of any BAR symbols on any line      | x5      |

---

## Install the dependencies

```sh
yarn
```

## Runs the app in the development mode

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```sh
yarn start
```

## Lint/Test

Core functionalities have tests. (Others, WIP)

```sh
# lint
yarn lint

# test
yarn test
```

## Builds the app for production (GitHub Actions)

This repository is using GitHub Actions for the build and deployment.\
(From `main` to the `github-pages` branch.)

https://furcan.github.io/SlotMachine/

---

## Copyright

Copyright &copy; 2021 Furkan MT. All rights reserved.
