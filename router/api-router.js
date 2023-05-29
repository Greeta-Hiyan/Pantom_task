const Customer = require("../modules/customer");
const File = require("../modules/file");
const vegetable = require("../modules/vegetable");


const APIRoute = function (app, router) {
    this.app = app;
    this.router = router;

    this.customer = new Customer(app);
    this.vegetable = new vegetable(app);
    this.file = new File(app);
    this.init();
}

module.exports = APIRoute;

APIRoute.prototype.init = function () {
    const self = this;

    //word to pdf conversion
    self.router.get('/fileConversion',function(req,res){
        self.file.FileConversion(req,res);
    })

    //promise function
    self.router.post('/getData',function(req,res){
        self.file.sample(req,res);
    })

    self.router.post('/register', (req, res) => {
        self.customer.register(req, res);
    })

    self.router.post('/getCust', (req, res) => {
        self.customer.getCust(req, res);
    })

    self.router.post('/veg-register', function (req, res) {
        self.vegetable.register(req, res);
    })

    self.app.use(self.app.conf.web.basepath, self.router)
}