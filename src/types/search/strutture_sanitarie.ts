export interface Interval {
	start?: any,
	end?: any,
}

export interface DayHour {
	openIntervals?: Interval[],
	isClosed?: boolean,
}

export interface HolidayHours {
	date: string,
	openIntervals?: Interval[],
	isClosed?: boolean,
	isRegularHours?: boolean,
}

export interface Hours {
	monday?: DayHour,
	tuesday?: DayHour,
	wednesday?: DayHour,
	thursday?: DayHour,
	friday?: DayHour,
	saturday?: DayHour,
	sunday?: DayHour,
	holidayHours?: HolidayHours[],
	reopenDate?: string,
}

export interface FrequentlyAskedQuestions {
	question: string,
	answer?: string,
}

export enum Type {
	DEPARTMENT_IN = "Department In",
	INDEPENDENT_ESTABLISHMENT_IN = "Independent Establishment In",
}

export interface GoogleEntityRelationship {
	type: Type,
	placeId: string,
}

export enum Type_1 {
	POSTAL_CODE = "Postal Code",
	REGION = "State/Region",
	COUNTY = "County",
	CITY = "City",
	SUBLOCALITY = "Sublocality",
}

export interface ServiceAreaPlaces {
	name?: string,
	type?: Type_1,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface C_contenutiInEvidenza {
	immagine?: Image,
	titolo?: string,
	sommario?: string,
	link?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface C_listaSpecialità {
	nomeSpecialità: string,
	descrizioneSpecialità?: string,
	linkSpecialità?: string,
}

export enum C_regione {
	ABRUZZO = "Abruzzo",
	BASILICATA = "Basilicata",
	CALABRIA = "Calabria",
	CAMPANIA = "Campania",
	EMILIA_ROMAGNA = "Emilia Romagna",
	FRIULI_VENEZIA_GIULIA = "Friuli Venezia Giulia",
	LAZIO = "Lazio",
	LIGURIA = "Liguria",
	LOMBARDIA = "Lombardia",
	MARCHE = "Marche",
	MOLISE = "Molise",
	PIEMONTE = "Piemonte",
	PUGLIA = "Puglia",
	SARDEGNA = "Sardegna",
	SICILIA = "Sicilia",
	TOSCANA = "Toscana",
	TRENTINO_ALTO_ADIGE = "Trentino Alto Adige",
	UMBRIA = "Umbria",
	VALLE_D_AOSTA = "Valle D'Aosta",
	VENETO = "Veneto",
}

export enum Type_2 {
	NONE = "None",
	BOOK_NOW = "Book Now",
	CALL_NOW = "Call Now",
	CONTACT_US = "Contact Us",
	SEND_MESSAGE = "Send Message",
	USE_APP = "Use App",
	PLAY_GAME = "Play Game",
	SHOP_NOW = "Shop Now",
	SIGN_UP = "Sign Up",
	WATCH_VIDEO = "Watch Video",
	SEND_EMAIL = "Send Email",
	LEARN_MORE = "Learn More",
	PURCHASE_GIFT_CARDS = "Purchase Gift Cards",
	ORDER_NOW = "Order Now",
	FOLLOW_PAGE = "Follow Page",
}

export interface FacebookCallToAction {
	type: Type_2,
	value?: string,
}

export interface FeaturedMessage {
	description?: string,
	url?: string,
}

export enum LocationType {
	LOCATION = "Location",
	HEALTHCARE_FACILITY = "Healthcare Facility",
	HEALTHCARE_PROFESSIONAL = "Healthcare Professional",
	ATM = "ATM",
	RESTAURANT = "Restaurant",
	HOTEL = "Hotel",
}

export interface MenuUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export interface OrderUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export enum PaymentOptions {
	ALIPAY = "Alipay",
	AMERICANEXPRESS = "American Express",
	ANDROIDPAY = "Google Pay",
	APPLEPAY = "Apple Pay",
	ATM = "ATM",
	ATMQUICK = "ATM Quick",
	BACS = "BACS",
	BANCONTACT = "Bancontact",
	BANKDEPOSIT = "Bank Deposit",
	BANKPAY = "Bank Pay",
	BGO = "Bank/Giro Overschrijving",
	BITCOIN = "Bitcoin",
	Bar = "Bargeld",
	CARTASI = "CartaSi",
	CASH = "Cash",
	CCS = "CCS",
	CHECK = "Check",
	CONB = "Contactloos betalen",
	CVVV = "Cadeaubon/VVV bon",
	DEBITNOTE = "Debit Note",
	DINERSCLUB = "Diners Club",
	DIRECTDEBIT = "Direct Debit",
	DISCOVER = "Discover",
	ECKARTE = "Girokarte",
	ECOCHEQUE = "EcoCheque",
	EKENA = "E-kena",
	EMV = "Elektronische Maaltijdcheques",
	FINANCING = "Financing",
	GOPAY = "GoPay",
	HAYAKAKEN = "Hayakaken",
	HEBAG = "He-Bag",
	IBOD = "iBOD",
	ICCARDS = "IC Cards",
	ICOCA = "Icoca",
	ID = "iD",
	IDEAL = "iDeal",
	INCA = "Incasso",
	INVOICE = "Invoice",
	JCB = "JCB",
	JCoinPay = "J−Coin Pay",
	JKOPAY = "JKO Pay",
	KITACA = "Kitaca",
	KLA = "Klantenkaart",
	KLARNA = "Klarna",
	LINEPAY = "LINE Pay",
	MAESTRO = "Maestro",
	MANACA = "Manaca",
	MASTERCARD = "MasterCard",
	MIPAY = "Mi Pay",
	MONIZZE = "Monizze",
	MPAY = "MPay",
	Manuelle_Lastsch = "Manuelle Lastschrift",
	Merpay = "メルPay",
	NANACO = "nanaco",
	NEXI = "Nexi",
	NIMOCA = "Nimoca",
	OREM = "Onder Rembours",
	PASMO = "Pasmo",
	PAYBACKPAY = "Payback Pay",
	PAYBOX = "Paybox",
	PAYCONIQ = "Payconiq",
	PAYPAL = "PayPal",
	PAYPAY = "PayPay",
	PAYSEC = "PaySec",
	PIN = "PIN",
	POSTEPAY = "Postepay",
	QRCODE = "QR Code Payment",
	QUICPAY = "QUICPay",
	RAKUTENEDY = "Rakuten Edy",
	RAKUTENPAY = "楽天Pay",
	SAMSUNGPAY = "Samsung Pay",
	SODEXO = "Sodexo",
	SUGOCA = "Sugoca",
	SUICA = "Suica",
	SWISH = "Swish",
	TICKETRESTAURANT = "Ticket Restaurant",
	TOICA = "Toica",
	TRAVELERSCHECK = "Traveler's Check",
	TSCUBIC = "TS CUBIC",
	TWINT = "Twint",
	UNIONPAY = "China UnionPay",
	VEV = "Via een verzekering",
	VISA = "Visa",
	VISAELECTRON = "Visa Electron",
	VOB = "Vooruit betalen",
	VOUCHER = "Voucher",
	VPAY = "V PAY",
	WAON = "WAON",
	WECHATPAY = "WeChat Pay",
	WIRETRANSFER = "Wire Transfer",
	Yucho_Pay = "ゆうちょPay",
	ZELLE = "Zelle",
	AuPay = "auPay",
	DBarai = "d払い ",
	Überweisung = "Banküberweisung",
}

export enum PriceRange {
	UNSPECIFIED = "Unspecified",
	ONE = "$",
	TWO = "$$",
	THREE = "$$$",
	FOUR = "$$$$",
}

export interface ReservationUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export interface ServiceArea {
	places?: string[],
}

export enum Presentation {
	BUTTON = "Button",
	LINK = "Link",
}

export interface UberLink {
	text?: string,
	presentation: Presentation,
}

export interface UberTripBranding {
	text: string,
	url: string,
	description: string,
}

export interface WebsiteUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export interface ComplexVideo {
	url: string,
	video?: string,
	description?: string,
}

export interface HealthcareFacility {
	accessHours?: Hours,
	bingWebsiteOverride?: string,
	questionsAndAnswers?: boolean,
	covid19InformationUrl?: string,
	covidMessaging?: string,
	externalAuthorizationSource?: string,
	externalAuthorizedIdentities?: string[],
	externalBlockedIdentities?: string[],
	facebookAbout?: string,
	facebookWebsiteOverride?: string,
	frequentlyAskedQuestions?: FrequentlyAskedQuestions[],
	fullyVaccinatedStaff?: boolean,
	geomodifier?: string,
	googleEntityRelationship?: GoogleEntityRelationship,
	googleMyBusinessLabels?: string[],
	googlePlaceId?: string,
	googleShortName?: string,
	holidayHoursConversationEnabled?: boolean,
	impressum?: string,
	landingPageUrl?: string,
	linkedInUrl?: string,
	neighborhood?: string,
	nudgeEnabled?: boolean,
	onlineServiceHours?: Hours,
	phoneticName?: string,
	pickupHours?: Hours,
	primaryConversationContact?: any,
	reviewResponseConversationEnabled?: boolean,
	serviceAreaPlaces?: ServiceAreaPlaces[],
	slug?: string,
	telehealthUrl?: string,
	what3WordsAddress?: string,
	yelpWebsiteOverride?: string,
	acceptingNewPatients?: boolean,
	additionalHoursText?: string,
	address: Address,
	addressHidden?: boolean,
	alternatePhone?: any,
	associations?: string[],
	brands?: string[],
	description?: string,
	hours?: Hours,
	logo?: ComplexImage,
	name: string,
	categories?: any,
	cityCoordinate?: Coordinate,
	closed?: boolean,
	conditionsTreated?: string[],
	c_amministratoreDelegato?: string,
	c_baseURL?: string,
	c_bingWebsite?: string,
	c_contenutiInEvidenza?: C_contenutiInEvidenza[],
	c_datiAmministrazione_1?: string,
	c_datiAmministrazione_2?: string,
	c_descrizioneBreve?: string,
	c_descrizioneLunga?: string,
	dm_directoryParents?: EntityReference[],
	c_direttoreSanitario?: string,
	c_elencoServiziStrutturaGVM?: string,
	c_elencoSpecialitaStrutturaGVM?: string,
	c_facebookWebsite?: string,
	c_immagine_cartina?: Image,
	c_immagineSpecialita?: Image,
	c_immagineStruttura?: Image,
	c_iniziativeCorrelate?: EntityReference[],
	c_listaSpecialità?: C_listaSpecialità[],
	c_nomeStruttura?: string,
	c_postiLetto?: string,
	c_regione?: C_regione,
	r_regione?: string,
	c_regioneStruttura?: EntityReference[],
	c_relazioneRegioneStruttura?: EntityReference[],
	c_urlContatti?: string,
	c_urlOrari?: string,
	c_urlPrenotazione?: string,
	c_urlTutteLeSpecialita?: string,
	displayCoordinate?: Coordinate,
	dropoffCoordinate?: Coordinate,
	emails?: string[],
	facebookOverrideCity?: string,
	facebookCoverPhoto?: Image,
	facebookCallToAction?: FacebookCallToAction,
	facebookDescriptor?: string,
	facebookEmail?: string,
	facebookLinkedAccount?: any,
	facebookName?: string,
	facebookPageUrl?: string,
	facebookParentPageId?: string,
	facebookProfilePhoto?: Image,
	facebookStoreId?: string,
	facebookVanityUrl?: string,
	fax?: any,
	featuredMessage?: FeaturedMessage,
	foursquareLinkedAccount?: any,
	photoGallery?: ComplexImage[],
	geocodedCoordinate?: Coordinate,
	gmbLinkedAccount?: any,
	googleAccountId?: string,
	googleAttributes?: any,
	googleCoverPhoto?: Image,
	googleProfilePhoto?: Image,
	googleWebsiteOverride?: string,
	insuranceAccepted?: string[],
	instagramHandle?: string,
	isoRegionCode?: string,
	keywords?: string[],
	languages?: string[],
	localPhone?: any,
	locationType?: LocationType,
	mainPhone?: any,
	menuUrl?: MenuUrl,
	mobilePhone?: any,
	npi?: string,
	orderUrl?: OrderUrl,
	paymentOptions?: PaymentOptions[],
	phones?: any,
	pickupCoordinate?: Coordinate,
	priceRange?: PriceRange,
	reservationUrl?: ReservationUrl,
	routableCoordinate?: Coordinate,
	serviceArea?: ServiceArea,
	services?: string[],
	shortName35?: string,
	shortName64?: string,
	id: string,
	timezone?: any,
	tollFreePhone?: any,
	ttyPhone?: any,
	twitterHandle?: string,
	uberClientId?: string,
	uberLink?: UberLink,
	uberTripBranding?: UberTripBranding,
	walkableCoordinate?: Coordinate,
	websiteUrl?: WebsiteUrl,
	yearEstablished?: number,
	yextDisplayCoordinate?: Coordinate,
	yextDropoffCoordinate?: Coordinate,
	yextPickupCoordinate?: Coordinate,
	yextRoutableCoordinate?: Coordinate,
	yextWalkableCoordinate?: Coordinate,
	videos?: ComplexVideo[],
}
