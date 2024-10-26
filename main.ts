input.onButtonPressed(Button.A, function () {
    datalogger.log(
    datalogger.createCV("pin", sonar_pin),
    datalogger.createCV("distance_cm", sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P8)),
    datalogger.createCV("distance_inch", sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_inch, DigitalPin.P8)),
    datalogger.createCV("distance_mm", sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P8))
    )
})
let sonar_pin = 0
sonar_pin = DigitalPin.P8
datalogger.setColumnTitles(
"pin",
"distance_cm",
"distance_inch",
"distance_mm"
)
basic.forever(function () {
	
})
