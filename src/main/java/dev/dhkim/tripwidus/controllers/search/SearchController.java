package dev.dhkim.tripwidus.controllers.search;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
public class SearchController {
    @RequestMapping(value = "/search", method = RequestMethod.GET, produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getSearch(ModelAndView modelAndView){
        modelAndView.setViewName("search/main");
        return modelAndView;
    }
}
