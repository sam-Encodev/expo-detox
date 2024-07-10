describe("App", () => {
	beforeAll(async () => {
		await device.launchApp();
	});

	beforeEach(async () => {
    await device.reloadReactNative();
	});

	it("expect some text to be visible", async () => {
		await expect(
			element(by.text("Open up App.js to start working on your app!")),
		).toBeVisible();
	});
});
