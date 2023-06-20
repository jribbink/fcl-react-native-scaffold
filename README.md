# FCL React Native Scaffold

This is a scaffold for building Flow Blockchain dApps (decentralized applications) targeting mobile devices using React Native. Its web counterpart is the [FCL Next Scaffold](https://github.com/chaseflemming/fcl-next-scaffold).

This particular scaffold uses [Expo](https://expo.io/) but it can be easily modified to use React Native CLI.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Flow CLI](https://docs.onflow.org/flow-cli/install/)
- [Android Studio](https://developer.android.com/studio) (for Android development) or [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Cadence VS Code Extension](https://marketplace.visualstudio.com/items?itemName=onflow.cadence) (optional, but recommended)

### Installation

1. Clone the repo

```sh
git clone
```

2. Install NPM packages

```sh
npm install
```

3. Run the app in development mode to verify installation

```sh
npm run dev
```

Congratulations! You've successfully installed the FCL React Native Scaffold!

## Features

- FCL setup & configuration
- Custom FCL hooks
- FCL authentication
- Cadence file loading
- Contract deployment
- Local development environment

## Usage

The scaffold supports all three Flow networks (Flow Emulator, Flow Testnet, Flow Mainnet) and can be configured to use any of them.

To start developing on these networks, use the following commands:

- `dev` - Flow Emulator development environment. This includes flow emulator and flow development wallet.
- `dev:testnet` - Flow Testnet development environment.
- `dev:mainnet` - Flow Mainnet development environment.

When using these commands, input is directed to Expo CLI. To run the app on a physical device, download the Expo Go app and scan the QR code. To run the app on a simulator, press `i` for iOS or `a` for Android.

Contracts should be deployed to the local environment by default. To deploy to the testnet or mainnet, please follow the instructions for the Flow CLI.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.
