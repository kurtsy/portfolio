import os
import webapp2
import jinja2

jinja_environment = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))


def is_devserver():
    return os.environ['SERVER_SOFTWARE'].startswith("Dev")


class Home(webapp2.RequestHandler):
    def get(self):
        values = {
          'debug': is_devserver()
        }
        template = jinja_environment.get_template('templates/index.html')
        self.response.out.write(template.render(values))

class About(webapp2.RequestHandler):
    def get(self):
        values = {
          'debug': is_devserver()
        }
        template = jinja_environment.get_template('templates/index0.html')
        self.response.out.write(template.render(values))

class Work(webapp2.RequestHandler):
    def get(self):
        values = {
          'debug': is_devserver()
        }
        template = jinja_environment.get_template('templates/index8.html')
        self.response.out.write(template.render(values))


class Advance(webapp2.RequestHandler):
    def get(self):
        values = {
          'debug': is_devserver()
        }
        template = jinja_environment.get_template('templates/index1.html')
        self.response.out.write(template.render(values))

class Hearst(webapp2.RequestHandler):
    def get(self):
        values = {
          'debug': is_devserver()
        }
        template = jinja_environment.get_template('templates/index2.html')
        self.response.out.write(template.render(values))


class Buttr(webapp2.RequestHandler):
    def get(self):
        values = {
          'debug': is_devserver()
        }
        template = jinja_environment.get_template('templates/index3.html')
        self.response.out.write(template.render(values))


class Alice(webapp2.RequestHandler):
    def get(self):
        values = {
          'debug': is_devserver()
        }
        template = jinja_environment.get_template('templates/index4.html')
        self.response.out.write(template.render(values))


class Poncho(webapp2.RequestHandler):
    def get(self):
        values = {
          'debug': is_devserver()
        }
        template = jinja_environment.get_template('templates/index5.html')
        self.response.out.write(template.render(values))


class Bonbite(webapp2.RequestHandler):
    def get(self):
        values = {
          'debug': is_devserver()
        }
        template = jinja_environment.get_template('templates/index6.html')
        self.response.out.write(template.render(values))


class Instaprint(webapp2.RequestHandler):
    def get(self):
        values = {
          'debug': is_devserver()
        }
        template = jinja_environment.get_template('templates/index7.html')
        self.response.out.write(template.render(values))


app = webapp2.WSGIApplication([
	('/', Home),
    ('/about', About),
    ('/work', Work),
    ('/advance', Advance),
	('/hearst', Hearst),
	('/buttr', Buttr),
	('/alice', Alice),
	('/poncho', Poncho),
	('/bonbite', Bonbite),
	('/instaprint', Instaprint),
],  debug=True)
