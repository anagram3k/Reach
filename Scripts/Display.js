// Display Parameter
const var label_parameter_name = Content.getComponent("label_parameter_name");

function updateDisplay() {
	label_parameter_name.set('text', Globals.displayParameter);
}


const screenTimer = Engine.createTimerObject();
screenTimer.setTimerCallback(showMainScreen);

inline function showMainScreen() {
	if (Globals.presetBrowserOpen || !UserSettings.enableAnimations || Globals.filterOpen || Globals.settingsOpen) return;

	displayShowMain('default');	
	screenTimer.stopTimer();
}

function showTempScreen(route) {
	if (Globals.presetBrowserOpen || !UserSettings.enableAnimations || Globals.filterOpen || Globals.settingsOpen) return;

	if (screenTimer.isTimerRunning()) {
		screenTimer.resetCounter();
	}
	
	screenTimer.startTimer(1500);
	displayShowMain(route);
}